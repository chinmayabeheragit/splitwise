import prisma from '../config/db';

// queries/user.query.ts

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      name: true,
      password: true,
      role: true, // ✅ Include role
    },
  });
};


export const createUser = async (email: string, name: string, hashedPassword: string) => {
  return prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
};
