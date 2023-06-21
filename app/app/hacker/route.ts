import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { prisma } from "db";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const email = session?.user?.email;

  const app = await prisma.hackerApp.findUnique({
    where: { userEmail: email },
  });

  NextResponse.json(app);
};

export default GET;
