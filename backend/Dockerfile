FROM node:18-alpine as development

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["node", "dist/index.js"]

FROM development as test

CMD ["npx", "jest"]