import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const SettingsScreen = () => {
    const menuItems = [
        { name: 'Change Pin', icon: 'lock-outline' },
        { name: 'Fingerprint', icon: 'fingerprint' },
        { name: 'Reset Password', icon: 'lock-reset' },
        { name: 'Settings', icon: 'cog-outline' },
        { name: 'Notification', icon: 'bell-outline' },
        { name: 'IRL events', icon: 'calendar-outline' },
        { name: 'Advertise with us', icon: 'bullhorn-outline' }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        <Icon name={item.icon} size={24} color="#000" style={styles.icon} />
                        <Text style={styles.menuText}>{item.name}</Text>
                        <Icon name="chevron-right" size={24} color="#000" />
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.logoutButton}>
                <Icon name="logout" size={24} color="#000" style={styles.icon} />
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    icon: {
        marginRight: 15,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    logoutText: {
        fontSize: 16,
        color: '#000',
    },
});
