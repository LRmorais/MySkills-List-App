import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill() {
    setSkills(oldSkills => [...oldSkills, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Lucass</Text>
      <TextInput
        style={styles.input}
        placeholder="new skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button action={handleAddNewSkill} />
      <Text style={[styles.title, {marginTop: 20}]}>Skills</Text>

      <FlatList
        data={skills}
        renderItem={({item}) => <SkillCard skill={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    color: '#FFF',
    fontSize: 18,
    backgroundColor: '#1F1E25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    marginTop: 20,
  },
});
