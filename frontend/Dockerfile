FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN ls -la node_modules/.bin && npx next --version

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "next", "start"]
