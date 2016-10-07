FROM nginx:1.10.1-alpine

COPY nginx-dev.conf /etc/nginx/nginx.conf
VOLUME /ui

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
