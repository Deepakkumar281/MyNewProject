import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Text,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Commonstyle} from '../common/Commonstyle';
  import {deviceHeight, deviceWidth} from '../common/Commondimension';
  import {Commonfont} from '../common/Commonfont';
  import {Commonimage} from '../common/Commonimage';
  
  const User = ({navigation}) => {
    const [active, setActive] = useState(0);
    const [active1, setActive1] = useState(0);
  
    return (
      <View style={Commonstyle.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../../assets/images/Arrow1.png')}></Image>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 5,
              alignItems: 'center',
              backgroundColor: '#F65735B8',
              padding: 5,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: deviceHeight(1.5),
                fontFamily: Commonfont.robotoblack,
              }}>
              15scv1sc1s5v1v1zv1z
            </Text>
            <Image source={require('../../assets/images/Group3y.png')}></Image>
          </View>
        </View>
  
        <TouchableOpacity
          onPress={() => navigation.navigate('setting')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 20,
            left: '10%',
          }}>
          <Image
            style={{
              width: deviceWidth(10),
              height: deviceHeight(5),
              resizeMode: 'stretch',
            }}
            source={require('../../assets/images/Ellipse132.png')}></Image>
          <Text style={{color: 'black'}}>User Name</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#00000080',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginVertical: deviceWidth(2),
            marginHorizontal: -20,
            paddingHorizontal: 20,
          }}>
          <View>
            <TouchableOpacity onPress={() => setActive(0)}>
              <Text style={active == 0 ? styles.text : styles.text1}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={() => setActive(1)}>
              <Text style={active == 1 ? styles.text : styles.text1}>
                Balance
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={() => setActive(2)}>
              <Text style={active == 2 ? styles.text : styles.text1}>Saved</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={() => setActive(3)}>
              <Text style={active == 3 ? styles.text : styles.text1}>
                Activity
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={() => setActive(4)}>
              <Text style={active == 4 ? styles.text : styles.text1}>
                History
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {active == 0 && (
          <View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                columnGap: 30,
                paddingTop: 20,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  columnGap: 10,
                }}>
                <Image
                  source={require('../../assets/images/Ellipse91.png')}></Image>
                <Text style={{color: 'black', fontSize: deviceHeight(2)}}>
                  Don Norman
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#D9D9D9',
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  paddingVertical: 5,
                }}>
                <Text
                  style={{
                    fontSize: deviceHeight(1.2),
                    color: 'black',
                    fontFamily: Commonfont.robotoblack,
                  }}>
                  Following
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {active == 1 && (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#4A90E2',
              padding: 20,
              borderRadius: 10,
              rowGap: 10,
            }}>
            <Text
              style={{
                fontSize: deviceHeight(2),
                color: 'black',
                fontFamily: Commonfont.robotoblack,
              }}>
              Total Balance
            </Text>
            <Text
              style={{
                fontSize: deviceHeight(3),
                color: 'black',
                fontFamily: Commonfont.robotoblack,
              }}>
              $ 79,120.72
            </Text>
            <View style={{flexDirection: 'row', columnGap: 10}}>
              <View
                style={{
                  backgroundColor: '#B1D3FF',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: deviceHeight(2),
                    color: 'black',
                    fontFamily: Commonfont.robotoblack,
                  }}>
                  Total Balance
                </Text>
                <Text
                  style={{
                    fontSize: deviceHeight(3),
                    color: 'black',
                    fontFamily: Commonfont.robotoblack,
                  }}>
                  $ 79,120.72
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F3DFFF',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: deviceHeight(2),
                    color: 'black',
                    fontFamily: Commonfont.robotoblack,
                  }}>
                  Total Balance
                </Text>
                <Text
                  style={{
                    fontSize: deviceHeight(3),
                    color: 'black',
                    fontFamily: Commonfont.robotoblack,
                  }}>
                  $ 79,120.72
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: active1 == 0 ? '#B1D3FF' : '#ECECEC',
                borderRadius: 5,
              }}>
              <TouchableOpacity
                onPress={() => setActive1(0)}
                style={[
                  {
                    borderRadius: 5,
                    backgroundColor: '#ECECEC',
                    flex: 1,
                    alignItems: 'center',
                    padding: 5,
                  },
                  active1 == 0 && {
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: deviceHeight(2.5),
                    color: 'black',
                    fontFamily: Commonfont.robotoblack,
                  }}>
                  Buy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActive1(1)}
                style={[
                  {
                    backgroundColor: '#B1D3FF',
                    borderRadius: 5,
                    flex: 1,
                    alignItems: 'center',
                    padding: 5,
                  },
                  active1 == 1 && {
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: deviceHeight(2.5),
                    color: 'black',
                    fontFamily: Commonfont.robotoblack,
                  }}>
                  Withdrawl
                </Text>
              </TouchableOpacity>
            </View>
            {active1 == 0 && (
              <View style={{rowGap: 10}}>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoblack,
                    }}>
                    Destination address
                  </Text>
                  <TextInput
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoregular,
                    }}
                    placeholder="paste here or scan qr code"
                    placeholderTextColor={'#0000004A'}></TextInput>
                </View>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoblack,
                    }}>
                    Destination address
                  </Text>
                  <TextInput
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoregular,
                    }}
                    placeholder="Ethereum (ERC20)"
                    placeholderTextColor={'#0000004A'}></TextInput>
                </View>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: 'black',
                        fontFamily: Commonfont.robotoblack,
                      }}>
                      Destination address
                    </Text>
                    <TextInput
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: 'black',
                        fontFamily: Commonfont.robotoregular,
                      }}
                      placeholder="Minimum: 0.02 ETH"
                      placeholderTextColor={'#0000004A'}></TextInput>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: '#0000004A',
                        fontFamily: Commonfont.robotoblack,
                      }}>
                      Destination address
                    </Text>
                    <Text
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: '#0000004A',
                        fontFamily: Commonfont.robotoblack,
                      }}>
                      WITHDRAW ALL
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F65735',
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 10,
                    width: '80%',
                    left: '10%',
                  }}>
                  <Text>PROCEED</Text>
                </TouchableOpacity>
              </View>
            )}
            {active1 == 1 && (
              <View style={{rowGap: 10}}>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoblack,
                    }}>
                    Destination address
                  </Text>
                  <TextInput
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoregular,
                    }}
                    placeholder="paste here or scan qr code"
                    placeholderTextColor={'#0000004A'}></TextInput>
                </View>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoblack,
                    }}>
                    Destination address
                  </Text>
                  <TextInput
                    style={{
                      fontSize: deviceHeight(1.5),
                      color: 'black',
                      fontFamily: Commonfont.robotoregular,
                    }}
                    placeholder="Ethereum (ERC20)"
                    placeholderTextColor={'#0000004A'}></TextInput>
                </View>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: 'black',
                        fontFamily: Commonfont.robotoblack,
                      }}>
                      Destination address
                    </Text>
                    <TextInput
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: 'black',
                        fontFamily: Commonfont.robotoregular,
                      }}
                      placeholder="Minimum: 0.02 ETH"
                      placeholderTextColor={'#0000004A'}></TextInput>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: '#0000004A',
                        fontFamily: Commonfont.robotoblack,
                      }}>
                      Destination address
                    </Text>
                    <Text
                      style={{
                        fontSize: deviceHeight(1.5),
                        color: '#0000004A',
                        fontFamily: Commonfont.robotoblack,
                      }}>
                      WITHDRAW ALL
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F65735',
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 10,
                    width: '80%',
                    left: '10%',
                  }}>
                  <Text>Buy BTC</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        {active == 2 && (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              padding: 20,
              borderRadius: 20,
              rowGap: 20,
              flexDirection: 'row',
              columnGap: 10,
            }}>
            <Image source={require('../../assets/images/Maskgroupy.png')}></Image>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', fontFamily: Commonfont.robotobold}}>
                Crypto & Bitcoin News
              </Text>
              <Text
                style={{
                  color: '#000000C4',
                  fontFamily: Commonfont.robotoregular,
                  fontSize: deviceHeight(1.5),
                }}>
                Cryptocurrency values $60,000, reaching its highest point
                since2021.Enthusiasts are waiting to see if it can achieve
              </Text>
              <Text
                style={{
                  color: '#000000C4',
                  fontFamily: Commonfont.robotoregular,
                  fontSize: deviceHeight(1.5),
                }}>
                loremipsum.net 27 min
              </Text>
            </View>
          </View>
        )}
        {active == 3 && (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              padding: 20,
              borderRadius: 20,
              rowGap: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('setting')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 20,
                }}>
                <Image
                  style={{
                    width: deviceWidth(6),
                    height: deviceHeight(3),
                    resizeMode: 'stretch',
                  }}
                  source={require('../../assets/images/a1.png')}></Image>
                <Text style={{color: 'black'}}>Comments</Text>
              </View>
              <Image
                source={require('../../assets/images/ArrowRight5.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('notification')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 20,
                }}>
                <Image
                  style={{
                    width: deviceWidth(6),
                    height: deviceHeight(3),
                    resizeMode: 'stretch',
                  }}
                  source={require('../../assets/images/a2.png')}></Image>
                <Text style={{color: 'black'}}>Blocked</Text>
              </View>
              <Image
                source={require('../../assets/images/ArrowRight5.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('irl')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 20,
                }}>
                <Image
                  style={{
                    width: deviceWidth(6),
                    height: deviceHeight(3),
                    resizeMode: 'stretch',
                  }}
                  source={require('../../assets/images/a4.png')}></Image>
                <Text style={{color: 'black'}}>Time spent</Text>
              </View>
              <Image
                source={require('../../assets/images/ArrowRight5.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 20,
                }}>
                <Image
                  style={{
                    width: deviceWidth(6),
                    height: deviceHeight(3),
                    resizeMode: 'stretch',
                  }}
                  source={require('../../assets/images/a5.png')}></Image>
                <Text style={{color: 'black'}}>Recent search</Text>
              </View>
              <Image
                source={require('../../assets/images/ArrowRight5.png')}></Image>
            </TouchableOpacity>
          </View>
        )}
        <View style={{position: 'absolute', bottom: 20, flex: 1, width: '100%'}}>
          <View
            style={{
              borderBottomColor: '#909090',
              borderBottomWidth: 1,
              borderStyle: 'dotted',
              marginHorizontal: -40,
            }}></View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: '5%',
              columnGap: 20,
              paddingLeft: '40%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/Download.png')}></Image>
            <Text style={{color: 'black'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default User;
  
  const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontSize: deviceHeight(1.8),
      fontFamily: Commonfont.robotomedium,
    },
    text1: {
      color: 'black',
      fontSize: deviceHeight(1.8),
      fontFamily: Commonfont.robotoregular,
    },
  });
  