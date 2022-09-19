import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import countryCodes from '../assets/countryCodes.json';

const CountryCodeModal = () => {
	const [query, setQuery] = useState('');
	const [filteredArr, setFilteredArr] = useState([]);

	useEffect(() => {
		if (query) {
			const result = countryCodes.filter(
				(item) =>
					item.code.toLowerCase().includes(query.toLowerCase()) ||
					item.name.toLowerCase().includes(query.toLowerCase())
			);
			setFilteredArr(result);
		} else {
			setFilteredArr(countryCodes);
		}
	}, [query]);

	return (
		<View style={styles.wrapper}>
			<View style={styles.wrapperInner}>
				<TextInput
					keyboardType='default'
					style={styles.queryInput}
					placeholder='Search for a country'
					onChangeText={(text) => setQuery(text)}
				/>
				<ScrollView
					style={styles.countryList}
					keyboardShouldPersistTaps='handled'
				>
					{filteredArr.map((country, key) => (
						<View style={styles.countryItem} key={key}>
							<Text style={styles.countryItemText}>{country.dial_code}</Text>
							<Text style={styles.countryItemText}>{country.name}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	);
};

export default CountryCodeModal;

const styles = StyleSheet.create({
	wrapper: {
		height: '100%',
	},

	wrapperInner: {
		paddingRight: 30,
		paddingLeft: 30,
		height: '100%',
		width: '100%',
	},

	queryInput: {
		paddingLeft: 20,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 14,
		fontSize: 16,
		marginBottom: 20,
	},

	countryItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 30,
		paddingRight: 30,
		height: 50,
		backgroundColor: '#fff',
		borderRadius: 14,
		fontSize: 16,
		marginBottom: 3,
		marginTop: 3,
	},
});
