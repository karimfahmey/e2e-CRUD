FROM node:15.13-alpine
WORKDIR /vigor_exercise
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
CMD ["npm", "run", "dev"]