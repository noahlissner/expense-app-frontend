import { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Image,
	Button,
	ActivityIndicator,
	ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/auth/authSlice';
import Ionicons from '@expo/vector-icons/Ionicons';

const Register = ({ navigation }) => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();

	const { isLoading } = useSelector((state) => state.auth);

	const handleSubmit = () => {
		const data = {
			firstname,
			lastname,
			email,
			phone,
			password,
			confirmPassword,
		};

		dispatch(register(data));
	};

	return (
		<View style={styles.wrapper}>
			<ScrollView
				style={styles.wrapperInner}
				keyboardShouldPersistTaps='handled'
			>
				{/* Top Container */}
				<Text style={styles.title}>Register</Text>
				<View style={styles.topContainer}>
					{/* Inputs */}
					<View style={styles.inputWrapper}>
						<TextInput
							keyboardType='email-address'
							style={styles.input}
							placeholder='Email'
							textContentType='emailAddress'
							onChangeText={(text) => setEmail(text)}
						/>
						{/* First & Last name (One row) */}
						<View style={styles.inputContainer}>
							<TextInput
								style={[styles.input, styles.inputGap, styles.inputLeft]}
								placeholder='First name'
								textContentType='givenName'
								onChangeText={(text) => setFirstname(text)}
							/>
							<TextInput
								style={[styles.input, styles.inputGap, styles.inputRight]}
								placeholder='Last name'
								textContentType='familyName'
								onChangeText={(text) => setLastname(text)}
							/>
						</View>
						{/* Phone */}
						<View style={[styles.phoneInputContainer, styles.inputGap]}>
							<TextInput
								keyboardType='phone-pad'
								style={styles.input}
								placeholder='Phone'
								textContentType='telephoneNumber'
								onChangeText={(text) => setPhone(text)}
							/>
						</View>
						{/* Password */}
						<TextInput
							style={[styles.input, styles.inputGap]}
							placeholder='Password'
							textContentType='newPassword'
							secureTextEntry={true}
							onChangeText={(text) => setPassword(text)}
						/>
						<TextInput
							style={[styles.input, styles.inputGap]}
							placeholder='Confirm Password'
							textContentType='newPassword'
							secureTextEntry={true}
							onChangeText={(text) => setConfirmPassword(text)}
						/>
					</View>
					{/* Register Button */}
					<Pressable
						onPress={handleSubmit}
						style={({ pressed }) => [
							{
								backgroundColor: pressed ? '#144EFE' : '#3869FE',
							},
							styles.registerBtn,
						]}
					>
						{isLoading ? (
							<ActivityIndicator color={'#fff'} />
						) : (
							<Text style={styles.registerBtnText}>Register</Text>
						)}
					</Pressable>
					<View style={styles.continueWithContainer}>
						<View style={styles.continueWith}>
							<View style={styles.continueWithLeftLine}></View>
							<Text style={styles.continueWithText}>Or continue with</Text>
							<View style={styles.continueWithRightLine}></View>
						</View>
						{/* Google & apple login */}
						<View style={styles.loginWith}>
							<Pressable style={styles.appleLogin}>
								<Ionicons name='logo-apple' size={32} />
							</Pressable>
							<Pressable style={styles.googleLogin}>
								<Ionicons name='logo-google' size={32} />
							</Pressable>
						</View>
					</View>
				</View>
				{/* Bottom Container */}
				<View style={styles.bottomContainer}>
					{/* Not a member */}
					<View style={styles.alreadyMember}>
						<Text style={styles.alreadyMemberText}>Already a member?</Text>
						<Pressable
							style={styles.loginBtn}
							onPress={() => navigation.navigate('Login')}
						>
							<Text style={styles.loginBtnText}>Login</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
export default Register;

const styles = StyleSheet.create({
	wrapper: {
		height: '100%',
		backgroundColor: '#F1F3F4',
		// flex: 1,
		// paddingLeft: 30,
		// paddingRight: 30,
	},

	wrapperInner: {
		paddingRight: 30,
		paddingLeft: 30,
		height: '100%',
		width: '100%',
	},

	title: {
		fontSize: 32,
		fontWeight: '700',
		textAlign: 'center',
	},

	topContainer: {
		flex: 1,
		marginTop: 50,
	},

	// Inputs
	inputWrapper: {
		flexDirection: 'column',
	},

	input: {
		// marginTop: 20,
		paddingLeft: 20,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 14,
		fontSize: 16,
	},

	inputContainer: {
		flexDirection: 'row',
	},

	inputLeft: {
		flex: 1,
		marginRight: 10,
	},

	inputRight: {
		flex: 1,
		marginLeft: 10,
	},

	inputGap: {
		marginTop: 20,
	},

	registerBtn: {
		marginTop: 30,
		height: 60,
		borderRadius: 14,
		alignItems: 'center',
		justifyContent: 'center',
	},

	registerBtnText: {
		fontWeight: '500',
		fontSize: 16,
		color: '#fff',
	},

	// Continue With
	continueWithContainer: {
		marginTop: 30,
	},

	continueWith: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 40,
	},
	continueWithText: {
		fontWeight: '500',
		color: '#525252',
		marginLeft: 15,
		marginRight: 15,
	},
	continueWithLeftLine: {
		height: 1,
		backgroundColor: '#000',
		opacity: 0.3,
		flex: 1,
	},
	continueWithRightLine: {
		height: 1,
		backgroundColor: '#000',
		opacity: 0.3,
		flex: 1,
	},

	// Google & Apple Login
	loginWith: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 35,
	},
	appleLogin: {
		height: 50,
		width: 70,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#D5DEF6',
		marginRight: 10,

		alignItems: 'center',
		justifyContent: 'center',
	},
	googleLogin: {
		height: 50,
		width: 70,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#D5DEF6',
		MarginLeft: 10,

		alignItems: 'center',
		justifyContent: 'center',
	},

	bottomContainer: {},

	// Already member
	alreadyMember: {
		marginBottom: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	alreadyMemberText: {},
	loginBtn: {
		marginLeft: 5,
	},
	loginBtnText: {
		color: '#3869FE',
	},
});
