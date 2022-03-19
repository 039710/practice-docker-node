FROM node
ENV NODE_ENV production
WORKDIR /app
COPY ./ /app
RUN npm install
CMD ["npm", "start"]