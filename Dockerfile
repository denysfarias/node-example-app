FROM node
WORKDIR /app
COPY . .
ENV PORT=3030
RUN npm install
EXPOSE 3030
ENTRYPOINT ["node", "app.js"]