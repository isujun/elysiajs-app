FROM oven/bun:latest

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install
RUN bun test
RUN bun start


EXPOSE 3000

CMD ["bun", "start"]
