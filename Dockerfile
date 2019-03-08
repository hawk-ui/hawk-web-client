FROM krig/crmsh
WORKDIR /app
RUN zypper -n install nodejs8 npm8
RUN npm install yarn
CMD ["sh", "./cboot.sh"]
