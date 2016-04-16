# run: gunicorn --bind 0.0.0.0:8004 wsgi
# To change the port 8004 to something else, you need to make changes
# 1. to /etc/nginx/sites-available/gutmanlab
#    in the location block DERM change the proxy_pass port
# 2. restart nginx (sudo service nginx restart)
# 3. change the port in this script
# 4. rerun gunicorn --bind 0.0.0.0:NEW_PORT wsgi

# accessing the app on the web
#  http://gutmanlab.computablebrain.emory.edu/DERM/

from app import app as application

if __name__ == "__main__":
    application.run(host="0.0.0.0", port=8050, debug=True)
