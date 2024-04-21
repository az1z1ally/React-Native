import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik'

// Checkbox
import BouncyCheckbox from 'react-native-bouncy-checkbox'

// Password Generation
import { usePasswordGenerator } from './shared/helper/password-generator'

const passwordSchema = Yup.object({
  passwordLength: Yup.number()
  .required('Length is required!')
  .min(4, 'Should be a min of 4 characters!')
  .max(15, 'Should be a max of 15 characters!')
})

const App = () => {
  const {
    password,
    isPassGenerated,
    lowerCase,
    upperCase,
    numbers,
    symbols,
    setPassword,
    setIsPassGenerated,
    setLowerCase,
    setUpperCase,setNumbers,
    setSymbols,
    generatePassword,
    resetPasswordState,
  } = usePasswordGenerator();


  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Gen</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log(values);
              generatePassword(+values.passwordLength)
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput 
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder='Ex. 8'
                      keyboardType='numeric'
                    />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase letters</Text>
                  <BouncyCheckbox 
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor='#29AB87'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase letters</Text>
                  <BouncyCheckbox
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={handleSubmit} 
                    style={[styles.btn, styles.primaryBtn]}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btn, styles.secondaryBtn]}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
    backgroundColor: '#333'
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: 1.25,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    letterSpacing: 1
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    // width: 120,
    width: '48%',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    justifyContent: 'center'
  },
  primaryBtn: {
    backgroundColor: '#218f76',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: .75
  },
  secondaryBtn: {
    backgroundColor: '#2f363f',
    width: '32%'
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    letterSpacing: .75
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
})
