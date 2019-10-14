FROM node:alpine as builder
WORKDIR '/app'
COPY ./my-app/package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/my-app/build /usr/share/nginx/html