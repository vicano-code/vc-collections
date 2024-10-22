import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();

    this.client.on('error', (err) => {
      console.log(`Redis Client Error: ${err.message}`);
    });
    this.client.on('connect', () => {
      // console.log('Redis client connected');
    });
  }

  // Check if Redis is connected
  isAlive() {
    return this.client.isOpen;
  }

  // Gets value corresponding to key in redis
  async get(key) {
    return await this.client.get(key);
  }

  // Creates a new key in redis with a specific duration
  async set(key, value, duration) {
    await this.client.set(key, value, {
      EX: duration, // Duration in seconds
    });
  }

  // Deletes key in redis service
  async del(key) {
    await this.client.del(key);
  }
}

// Create and export an instance of RedisClient
const redisClient = new RedisClient();
export default redisClient;
