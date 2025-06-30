import { Kafka } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'shared-client',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});
