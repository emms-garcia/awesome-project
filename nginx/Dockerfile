FROM tutum/nginx
RUN rm /etc/nginx/sites-enabled/default
RUN rm /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx
ADD sites-enabled/ /etc/nginx/sites-enabled
