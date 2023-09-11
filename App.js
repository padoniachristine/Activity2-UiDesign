import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Qr =()=>{
  return(
    <View>
      <Image source={require('./assets/QR.png')} style={styles.qr}/>
    </View>
  )
};

const Pen =()=>{
  return(
  <View>
    <Image source={require('./assets/pen.png')} style={styles.pen}/>
  </View>
  )
};

const Cam =()=>{
  return(
    <Image source={require('./assets/cam.png')} style={styles.cam}/>
  )
};
const Ming =()=>{
  return(
    <View>
      <Image source={require('./assets/ming.png')} style={styles.ming}/>
    </View>
  )
};

const Phone =()=>{
  return(
    <View>
      <Image source={require('./assets/phone.png')} style={styles.phone}/>
    </View>
  )
};

const Setting =()=>{
  return(
    <View>
      <Image source={require('./assets/setting.png')} style={styles.setting}/>
    </View>
  )
};
const Notes =()=>{
  return(
    <View>
      <Image source={require('./assets/notes.png')} style={styles.notes}/>
    </View>
  )
};
const Add =()=>{
  return(
    <View>
      <Image source={require('./assets/add.png')} style={styles.add}/>
    </View>
  )
};
const Share =()=>{
  return(
    <View>
      <Image source={require('./assets/share.png')} style={styles.share}/>
    </View>
  )
};
const About =()=>{
  return(
    <View>
      <Image source={require('./assets/about1.png')} style={styles.about}/>
    </View>
  )
};
const Chat =()=>{
  return(
    <View>
      <Image source={require('./assets/chat.png')} style={styles.chat}/>
    </View>
  )
};
const Phone2 =()=>{
  return(
    <View>
      <Image source={require('./assets/phone2.png')} style={styles.phone2}/>
    </View>
  )
};
const More =()=>{
  return(
    <View>
      <Image source={require('./assets/more.png')} style={styles.more}/>
    </View>
  )
};

const Border =(props)=>{
  return(
    <View><Text style={styles.bd}>{props.bd1}</Text></View>
  )
};
const Bords =(props)=>{
  return(
    <View><Text style={styles.bords}>{props.bords1}</Text></View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cos}>
      <View style={styles.nep}><Pen/></View>
      <View style={styles.bar}><Qr/></View>
      </View>
      <View style={styles.mac}><Cam/></View>
      <View style={styles.name}>
        <Text style={styles.nm} >Christine Padonia</Text>
        <Text style={styles.num}>+639071815412</Text>
        </View>
        <View style={styles.log}>
        <View><Ming/></View>
        <View>
          <Text style={styles.sm}>Sticker Market</Text>
          <Text style={styles.sm1}>Add fun to your chats with sticker</Text>
        </View>
        </View>

        <View style={styles.log2}>
          <View><Phone/></View>
          <View>
            <Text style={styles.vo}>Viber Out</Text>
            <Text style={styles.vo1}>Call home or abroad with Viber Out's low calling rates</Text>
          </View>
        </View>
        <View><Border bd1=" "/></View>
        <View style={styles.log3}>
          <View><Setting/></View>
          <View><Text style={styles.st}>Settings</Text></View>
        </View>
        <View style={styles.log4}>
          <View><Notes/></View>
          <View><Text style={styles.nt}>My notes</Text></View>
        </View>
        <View style={styles.log5}>
          <View><Add/></View>
          <View><Text style={styles.ac}>Add contact</Text></View>
        </View>
        <View style={styles.log6}>
          <View><Share/></View>
          <View><Text style={styles.if}>Invite friends</Text></View>
        </View>
        <View style={styles.log7}>
          <View><About/></View>
        <View><Text style={styles.aq}>About and FAQ</Text></View>
        </View>
        <View><Bords bords1=" "/></View>
        <View  style={styles.log8}>
          <View><Chat/><Text style={styles.ch}>Chats</Text></View>
          <View><Phone2/><Text style={styles.ph}>Calls</Text></View>
          <View><More/><Text style={styles.mr}>More</Text></View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  cos:{
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 260,
    marginTop: 55
  },
  nep:{
    marginRight:30
  },
  cam:{
    marginLeft: 50
  },
  mac:{
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    height: 150,
    width: 150,
  },
  nm:{
    fontSize: 33
  },
  num:{
    marginLeft: 35,
    color: 'gray',
    fontSize: 20
  },
  log:{
    flexDirection: 'row',
    marginRight: 150
  },
  ming:{
    marginRight: 10,
    marginTop: 20
  },
  sm:{
    marginTop: 30,
    fontSize: 20
  },
  sm1:{
    color: 'gray'
  },
  log2:{
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 100,
    marginTop: 13
  },
  phone:{
    marginRight: 20
  },
  vo:{
    fontSize: 20
  },
  vo1:{
    color: 'gray',
    width: 400
  },
  bd:{
    borderBottomWidth: 10,
    paddingHorizontal: 200,
    borderColor: 'lightgray'
  },
  log3:{
    flexDirection: 'row',
    marginTop: 13,
    marginRight: 250
  },
  setting:{
    marginRight: 20
  },
  st:{
    fontSize: 20,
    marginTop: 15
  },
  log4:{
    flexDirection: 'row',
    marginRight: 245,
    marginTop: 13
  },
  notes:{
    marginRight: 20
  },
  nt:{
    fontSize: 20,
    marginTop: 20
  },
  log5:{
    flexDirection: 'row',
    marginRight: 230,
    marginTop: 13
  },
add:{
  marginRight:19,
  marginLeft: 10
},
ac:{
  fontSize:20,
  marginTop: 20
},
log6:{
  flexDirection: 'row',
  marginRight: 216,
  marginTop: 13
},
share:{
  marginRight: 20
},
if:{
  fontSize: 20,
  marginTop: 17
},
log7:{
  flexDirection: 'row',
  marginRight: 199,
  marginTop: 13
},
about:{
  marginRight: 20

},
aq:{
  fontSize: 20,
  marginTop: 17
},
bords:{
  borderBottomWidth: 1,
  borderColor: 'gray',
  paddingHorizontal: 200

},
log8:{
  flexDirection: 'row',
},
chat:{
  marginRight: 50
},
ch:{
color: 'gray',
marginLeft: 10
},
phone2:{
  marginRight: 50,
  marginLeft: 60
},
ph:{
  marginLeft: 70,
  color: 'gray'
},
more:{
  marginLeft: 60
},
mr:{
  marginLeft:65,
  color: '#CC5DE8'
}
});
