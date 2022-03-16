import email
from flask import flash,request,jsonify,session
from . import auth
from ..models import ClientUser,Mechanic
from .. import db



@auth.route('/login/client',methods=['POST'])
def loginClient():
    data = request.get_json()
    
    
    clientuser = ClientUser.query.filter_by(email = data['email']).first()
    
    if clientuser is not None and clientuser.verify_password(password = data['password']):
        session['logged_in'] = True
        status = True
    else:
        status = False
    return jsonify({'result': status})



@auth.route('/register/client',methods=['POST'])
def registerClient():
    data = request.get_json()
    
    user = ClientUser(email = data['email'],username = data['username'], password = data['password'])

    try:
        db.session.add(user)
        db.session.commit()
        status = 'success'
    except:
        status = 'this client is already registered'
    db.session.close()
    return jsonify({'result': status})

@auth.route('/logout/client')
def logoutClient():
    session.pop('logged_in', None)
    return jsonify({'result': 'success'})

@auth.route('/login/mechanic',methods=['POST'])
def loginMechanic():
    data = request.get_json()
    
    
    mechanic = Mechanic.query.filter_by(email = data['email']).first()
    
    if mechanic is not None and mechanic.verify_password(password = data['password']):
        session['logged_in'] = True
        status = True
    else:
        status = False
    return jsonify({'result': status})

@auth.route('/register/mechanic',methods=['POST'])
def registerMechanic():
    data = request.get_json()
    
    mechanic = Mechanic(email = data['email'],username = data['username'], password = data['password'])

    try:
        db.session.add(mechanic)
        db.session.commit()
        status = 'success'
    except:
        status = 'this mechanic is already registered'
    db.session.close()
    return jsonify({'result': status})

@auth.route('/logout/mechanic')
def logoutMechanic():
    session.pop('logged_in', None)
    return jsonify({'result': 'success'})

@auth.route('/status')
def status():
    if session.get('logged_in'):
        if session['logged_in']:
            return jsonify({'status': True})
    else:
        return jsonify({'status': False})

