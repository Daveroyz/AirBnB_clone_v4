#!/usr/bin/python3
""" Starts a Flash Web Application """
from models import storage
from models.state import State
from models.city import City
from models.amenity import Amenity
from models.place import Place
from os import environ
from flask import Flask, render_template
<<<<<<< HEAD
=======
import uuid
>>>>>>> 1bd675a43d65787e87255de640fe26322bcb282d
app = Flask(__name__)
# app.jinja_env.trim_blocks = True
# app.jinja_env.lstrip_blocks = True


@app.teardown_appcontext
def close_db(error):
    """ Remove the current SQLAlchemy Session """
    storage.close()


@app.route('/0-hbnb/', strict_slashes=False)
def hbnb():
    """ HBNB is alive! """
    states = storage.all(State).values()
    states = sorted(states, key=lambda k: k.name)
    st_ct = []

    for state in states:
        st_ct.append([state, sorted(state.cities, key=lambda k: k.name)])

    amenities = storage.all(Amenity).values()
    amenities = sorted(amenities, key=lambda k: k.name)

    places = storage.all(Place).values()
    places = sorted(places, key=lambda k: k.name)

<<<<<<< HEAD
     # Generate a UUID and convert it to a string
    cache_id = str(uuid4())

=======
>>>>>>> 1bd675a43d65787e87255de640fe26322bcb282d
    return render_template('0-hbnb.html',
                           states=st_ct,
                           amenities=amenities,
                           places=places,
<<<<<<< HEAD
                           cache_id=cache_id)
=======
                           cache_id=uuid.uuid4())
>>>>>>> 1bd675a43d65787e87255de640fe26322bcb282d


if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)
