import React from "react";
import { StatusBar, AppRegistry, ScrollView, Image, Text, FlatList, StyleSheet, View, SectionList } from "react-native";

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>

        <View style={styles.header}>
          <Text>footer</Text>
        </View>

        <View style={styles.body}>
          <SectionList
            sections={[
              {title: 'D', data: ['Devin']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
        
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  body: {
    flex: 6,

  },
  footer: {
    flex: 1,
    backgroundColor:'red',
  }
})