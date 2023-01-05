import { user } from "../prisma";

async function main() {
  const userCount = await user.count();
  console.log(userCount);
}

main();
