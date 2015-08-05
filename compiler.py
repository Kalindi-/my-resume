# Code to render content to be hosted on google app engine
# link to page http://my-little-port-folio.appspot.com/

import os
import webapp2
import jinja2
import json

from google.appengine.ext import ndb


#initializing work environment: the file, and the jinja
template_dir = os.path.join(os.path.dirname(__file__), "templates")
template_loader = jinja2.FileSystemLoader(template_dir)
template_env = jinja2.Environment(loader = template_loader, autoescape = True)

# page making handler
class Handler(webapp2.RequestHandler):
    """contains the basic methods for rendering the templates into html pages"""
    def write(self, *arguments, **key_word_dictionary):
        """makes a html page out of the inputs"""
        self.response.out.write(*arguments, **key_word_dictionary)

    def render_str(self, template, **parameters):
        """makes a string out of the inputs"""
        t = template_env.get_template(template)
        return t.render(parameters)

    def render(self, template, **key_word_dictionary):
        """takes template to fill it in with the keywords"""
        self.write(self.render_str(template, **key_word_dictionary))

#my places
class Places(ndb.Model):
    """object made of user inputs for stage 4 """
    lat = ndb.StringProperty()
    lon = ndb.StringProperty()
    name = ndb.StringProperty()
    date = ndb.DateTimeProperty(auto_now_add=True)

#my click objects
class Click(ndb.Model):
    """object made of user inputs for stage 4 """
    click = ndb.StringProperty()
    country = ndb.StringProperty()
    date = ndb.DateTimeProperty(auto_now_add=True)



class Page(Handler):
    def get(self, reg_input="0"):
        """makes pages up"""

# try to make a file change depending on database objects
        # query = Places.query().order(Places.date)
        # replacement_dictionary = {}
        # for place in query:
        #     name = place.name
        #     lat = place.lat
        #     lon = place.lon
        #     replacement_dictionary[name] =  lat + " " + lon

        # lines = [] #http://stackoverflow.com/questions/13089234/replacing-text-in-a-file-with-python
        # with open('places.js') as infile:
        #     for line in infile:
        #         for src, target in replacement_dictionary.iteritems():
        #             replaceable = "insert_coordinates_values"
        #             if replaceable in line:
        #                 line = line.replace(replaceable, target)
        #             lines.append(line)
        # with open('places.js', 'w') as outfile:
        #     outfile.write(line)


        self.render(page_dictionary[reg_input])

    def post(self):
        """retrieve input data and create instances of object"""
        click_event = self.request.get('click')
        country = self.request.get('country')
        click = Click(click=click_event, country=country)
        click.put()

        # name = self.request.get('name')
        # lat = self.request.get('lat')
        # lon = self.request.get('lon')
        # place = Places(name=name, lat=lat, lon = lon)
        # place.put()

page_dictionary = {
    "0" : "index.html",
}

#creation of pages
app = webapp2.WSGIApplication([(r'/', Page),
                               ('/(\w+)', Page),
                              ],
                              debug = True)