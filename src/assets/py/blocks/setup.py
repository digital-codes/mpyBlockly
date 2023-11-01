# First line indentation wrong! Don't remove this comment
# from asset loader
""" Blockly code """

import machine
import json
import time
import umqtt.simple
import math
import network
import atom

# Add other necessary imports here

print("Starting Atom Matrix")

# get instance
MX = atom.Matrix()


##### initialize built-in stuff first ######
### LED
def rgbFill(color):
    """ set all pixels to same color (r,g,b) """
    global MX
    MX.set_pixels_color(*color)

def rgbSet(pos,color):
    """ set pixel at index (from 1) to color (r,g,b) """
    global MX
    MX.set_pixel_color(pos-1,*color)

def rgbGet(pos):
    """ set pixel color at index (from 1). return color (r,g,b) """
    global MX
    return MX.get_pixel_color(pos - 1)

### IMU


### Button
# mx.get_button_status()
# set_button_callback()
def getBtn():
    """ get button vlaue. return 0 if pressed """
    global MX
    return MX.get_button_status()

def setBtnCallback(fn):
    """ set button pressed callback. needs lamda  """
    global MX
    MX.set_button_callback(lambda f:fn())

def clrBtnCallback():
    """ clr button pressed callback  """
    global MX
    MX.set_button_callback(None)

clrBtnCallback()

##### check sensors on grove port ######

##### check sensors on grove port ######
# newer ENV 2,3: DHT12(0x5C),BMP280(0x76)

# SCL: yellow, pin 32
# SDA: white, pin 26
# On Matrix, this is I2C1. HW i2c not working. maybe too fast?
extI2c = machine.SoftI2C(scl=machine.Pin(32), sda=machine.Pin(26))

# internal ic2 is for imu. not on a default HW I2C
intI2c = machine.SoftI2C(scl=machine.Pin(21), sda=machine.Pin(25))



SENSORS = {
    "bps": {"bus":extI2c,"addr": 0x76, "avail": False},
    "tvoc": {"bus":extI2c,"addr": 0x58, "avail": False},
    "imu": {"bus":intI2c,"addr": 0x68, "avail": False},
    # Add more sensors as needed
}


def check_sensors():
    for sensor, config in SENSORS.items():
        try:
            config["bus"].readfrom(config['addr'], 4)
            config['avail'] = True
        except OSError:
            print(f"{sensor} missing")
            config['avail'] = False


def initialize_sensors():
    # Add sensor initialization code here
    for sensor, config in SENSORS.items():
      print(f"Sensor {sensor}:",config)
      pass

check_sensors()
initialize_sensors()

rgbFill((0,0,0))
rgbSet(12,(200,200,0))

rgbSet(0, (255,255,255))
rgbSet(1, (255,255,255))
rgbSet(2, (255,255,255))
rgbSet(3, (10,10,10))
rgbSet(4, (51,0,0))
rgbSet(5, (10,10,10))
rgbSet(6, (10,10,10))
rgbSet(7, (10,10,10))
rgbSet(8, (10,10,10))
rgbSet(9, (10,10,10))
rgbSet(10, (255,0,0))
rgbSet(11, (255,0,0))
rgbSet(12, (255,0,0))
rgbSet(13, (255,0,0))
rgbSet(14, (255,0,0))
rgbSet(15, (10,10,10))
rgbSet(16, (10,10,10))
rgbSet(17, (10,10,10))
rgbSet(18, (51,255,255))
rgbSet(19, (10,10,10))
rgbSet(20, (51,0,0))
rgbSet(21, (10,10,10))
rgbSet(22, (10,10,10))
rgbSet(23, (51,255,255))
rgbSet(24, (10,10,10))

time.sleep(2)
rgbFill((0,50,0))

def btn():
    print("btn")

setBtnCallback(btn)

time.sleep(5)
clrBtnCallback()
rgbFill((0,0,0))

