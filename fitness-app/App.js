import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import DiscoverCard from './components/DiscoverCard';
import GuideCard from './components/GuideCard';
import Header from './components/Header';
import WorkoutCard from './components/WorkoutCard';
import MenuBar from './components/MenuBar';


export default function App() {

  return (
      <ImageBackground 
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.background}
        >
        <Header title="Hope you are great Anne,
Let's workout to get some gains!"/>

        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Discover</Text>
            <DiscoverCard img={require('./assets/discover/discover1.png')} title='New Skills Achieved' description='4 This month'/>
            <DiscoverCard img={require('./assets/discover/discover2.png')} title='New Skills Achieved' description='4 This month'/> 
            <DiscoverCard img={require('./assets/discover/discover3.png')} title='New Skills Achieved' description='4 This month'/>    
            <DiscoverCard img={require('./assets/discover/discover4.png')} title='New Skills Achieved' description='4 This month'/>    
          </View>

          <View style={styles.content}>
            <Text style={styles.contentTitle}>Recent workout</Text>

            <ScrollView horizontal={true} style={{marginLeft: '7%', marginBottom:30}}>
                <WorkoutCard img={require('./assets/workout/workout1.png')} title='Push ups' description='3 sets x 10'/>
                <WorkoutCard img={require('./assets/workout/workout2.png')} title='Pull ups' description='3 sets x 10'/>
                <WorkoutCard img={require('./assets/workout/workout3.png')} title='Push ups' description='3 sets x 10'/>
              </ScrollView>
          </View>

          <View style={styles.content}>
            <Text style={styles.contentTitle}>Active Technique Guide</Text>
            
            <ScrollView horizontal={true} style={{marginLeft: '7%', marginBottom:30}}>
                <GuideCard idx='01' title='Korean Dips' likes={65} comments={42} />
                <GuideCard idx='02' title='Korean Dips' likes={33} comments={12} />
                <GuideCard idx='03' title='Korean Dips' likes={666} comments={133} />
              </ScrollView>
          </View>
        </ScrollView>

        <View>
          <MenuBar/>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
  },
  content: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    alignItems: 'center',
    marginBottom: 20
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginRight: '15%',
    marginBottom: 30,
    width: 300
  }
});
