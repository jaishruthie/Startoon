import numpy as np
import matplotlib.pyplot as plt

# Load the dataset from text file
data = np.loadtxt('Data_1.txt')  # Assuming 'Data_1.txt' is the filename

# Initialize lists to hold maxima and minima indices and values
maxima = []
minima = []

# Analyze the data to find maxima and minima
for i in range(1, len(data)-1):
    if data[i] > data[i-1] and data[i] > data[i+1]:
        maxima.append((i, data[i]))
    elif data[i] < data[i-1] and data[i] < data[i+1]:
        minima.append((i, data[i]))

# Extract the indices and values for plotting
max_indices, max_values = zip(*maxima)
min_indices, min_values = zip(*minima)

# Plotting the results
plt.plot(data, label='Signal')
plt.scatter(max_indices, max_values, color='red', label='Maxima', marker='o')
plt.scatter(min_indices, min_values, color='blue', label='Minima', marker='o')
plt.title('Signal with Maxima and Minima')
plt.xlabel('Index')
plt.ylabel('Amplitude')
plt.legend()
plt.show()
