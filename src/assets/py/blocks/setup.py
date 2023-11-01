# First line indentation wrong! Don't remove this comment
# from asset loader
""" Blockly code """

import machine
import json
import time
import umqtt.simple
import neopixel
import math
import network

# Add other necessary imports here

print("Starting")

##### initialize built-in stuff first ######
### LED
neoPin = 27
p = machine.Pin(neoPin)
RGB = neopixel.NeoPixel(p,25)

def rgbFill(color):
    global RGB
    RGB.fill(color)
    RGB.write()

def rgbSet(pos,color):
    global RGB
    RGB[pos-1] = color
    RGB.write()


### IMU


### Button


##### check sensors on grove port ######

##### check sensors on grove port ######
# newer ENV 2,3: DHT12(0x5C),BMP280(0x76)

# SCL: yellow, pin 32
# SDA: white, pin 26
extI2c = machine.SoftI2C(scl=machine.Pin(32), sda=machine.Pin(26))

# internal ic2 is for imu
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
rgbFill((0,0,0))


