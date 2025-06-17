import ace_tools as tools
import pandas as pd
import numpy as np
import random
import matplotlib.pyplot as plt
from collections import defaultdict

# Environment setup: Tic Tac Toe


class TicTacToe:
    def __init__(self):
        self.reset()

    def reset(self):
        self.board = [' '] * 9
        self.current_winner = None
        return self.get_state()

    def get_state(self):
        return tuple(self.board)

    def available_actions(self):
        return [i for i, x in enumerate(self.board) if x == ' ']

    def make_move(self, square, letter):
        if self.board[square] == ' ':
            self.board[square] = letter
            if self.winner(square, letter):
                self.current_winner = letter
            return True
        return False

    def winner(self, square, letter):
        row_ind = square // 3
        row = self.board[row_ind*3:(row_ind+1)*3]
        if all([s == letter for s in row]):
            return True

        col_ind = square % 3
        col = [self.board[col_ind+i*3] for i in range(3)]
        if all([s == letter for s in col]):
            return True

        diag1 = [self.board[i] for i in [0, 4, 8]]
        diag2 = [self.board[i] for i in [2, 4, 6]]
        if all([s == letter for s in diag1]) or all([s == letter for s in diag2]):
            return True

        return False

    def is_full(self):
        return ' ' not in self.board

    def game_over(self):
        return self.current_winner is not None or self.is_full()

    def render(self):
        for i in range(3):
            print(self.board[i*3:(i+1)*3])
        print()

# MC and TD Learning Agents


class MCAgent:
    def __init__(self, epsilon=0.1, alpha=0.1, gamma=1.0):
        self.epsilon = epsilon
        self.alpha = alpha
        self.gamma = gamma
        self.Q = defaultdict(lambda: np.zeros(9))
        self.returns_sum = defaultdict(float)
        self.returns_count = defaultdict(float)

    def policy(self, state, available_actions):
        if np.random.rand() < self.epsilon:
            return random.choice(available_actions)
        else:
            q_values = self.Q[state]
            q_values = [q if i in available_actions else -
                        np.inf for i, q in enumerate(q_values)]
            return int(np.argmax(q_values))

    def update(self, episode):
        G = 0
        visited = set()
        for state, action, reward in reversed(episode):
            G = self.gamma * G + reward
            if (state, action) not in visited:
                self.returns_sum[(state, action)] += G
                self.returns_count[(state, action)] += 1
                self.Q[state][action] = self.returns_sum[(
                    state, action)] / self.returns_count[(state, action)]
                visited.add((state, action))


class TDAgent:
    def __init__(self, epsilon=0.1, alpha=0.1, gamma=1.0):
        self.epsilon = epsilon
        self.alpha = alpha
        self.gamma = gamma
        self.Q = defaultdict(lambda: np.zeros(9))

    def policy(self, state, available_actions):
        if np.random.rand() < self.epsilon:
            return random.choice(available_actions)
        else:
            q_values = self.Q[state]
            q_values = [q if i in available_actions else -
                        np.inf for i, q in enumerate(q_values)]
            return int(np.argmax(q_values))

    def update(self, state, action, reward, next_state, next_available_actions, done):
        max_q_next = 0 if done else max(
            [self.Q[next_state][a] for a in next_available_actions])
        self.Q[state][action] += self.alpha * \
            (reward + self.gamma * max_q_next - self.Q[state][action])

# Training function


def train(agent, episodes=5000):
    results = {'X': 0, 'O': 0, 'draw': 0}
    for _ in range(episodes):
        env = TicTacToe()
        state = env.reset()
        episode = []
        current_player = 'X'

        while not env.game_over():
            available = env.available_actions()
            action = agent.policy(state, available)
            env.make_move(action, current_player)
            next_state = env.get_state()
            reward = 0
            done = env.game_over()

            if env.current_winner == 'X':
                reward = 1
            elif env.current_winner == 'O':
                reward = -1
            elif env.is_full():
                reward = 0

            if isinstance(agent, MCAgent):
                episode.append((state, action, reward))
            else:
                next_available = env.available_actions()
                agent.update(state, action, reward,
                             next_state, next_available, done)

            state = next_state
            current_player = 'O' if current_player == 'X' else 'X'

        if isinstance(agent, MCAgent):
            agent.update(episode)

        if env.current_winner == 'X':
            results['X'] += 1
        elif env.current_winner == 'O':
            results['O'] += 1
        else:
            results['draw'] += 1

    return results


# Compare MC and TD agents
mc_agent = MCAgent()
td_agent = TDAgent()

mc_results = train(mc_agent)
td_results = train(td_agent)

# Show results
results_df = pd.DataFrame([mc_results, td_results], index=[
                          "Monte Carlo", "TD Learning"])
tools.display_dataframe_to_user(
    name="MC vs TD Tic Tac Toe Results", dataframe=results_df)
