import os
import multiprocessing

# Bind to host and port
bind = os.environ['HOST'] + ':' + os.environ['PORT']

# Set the number of workers
workers = os.getenv('WORKERS', default=(multiprocessing.cpu_count() * 2 + 1))

# Set the maximum number of requests a worker will process before restarting
backlog = os.getenv('BACKLOG', default=2048)

# Set the number of worker threads
threads = os.getenv('THREADS', default=(multiprocessing.cpu_count() * 2 + 1))