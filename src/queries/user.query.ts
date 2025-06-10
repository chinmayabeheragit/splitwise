import prisma from '../config/db';

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
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
