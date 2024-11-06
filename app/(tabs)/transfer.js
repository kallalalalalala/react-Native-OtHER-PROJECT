import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';  // Importation de useRouter pour gérer la navigation
import { SolanaMobileWalletAdapterError } from '@solana-mobile/mobile-wallet-adapter-protocol';

export default function Transfer() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  
  const router = useRouter(); 

  // Réinitialiser le message de confirmation et les champs à chaque fois que la page est rendue
  useEffect(() => {
    setAmount('');  // Réinitialiser le montant
    setRecipient('');  // Réinitialiser le destinataire
    setConfirmationMessage('');  // Réinitialiser le message de confirmation
  }, []);  // Le tableau vide [] garantit que ça ne se déclenche qu'au montage du composant

  const handleTransfer = () => {
    if (amount && recipient) {
      setConfirmationMessage(`Transfer of $${amount} to ${recipient} is successful!`);
      
      // Réinitialiser les champs après un transfert réussi
      setAmount('');
      setRecipient('');
    } else {
      setConfirmationMessage('Please fill in both fields!');
    }
  };

  const handleBackToHome = () => {
    // Fermer le clavier avant de rediriger
    Keyboard.dismiss();
    // Utilisation de router.push() pour rediriger l'utilisateur vers la page d'accueil
    router.push('/');
    setConfirmationMessage('');
    
  };

  return (
    // TouchableWithoutFeedback pour capturer les clics en dehors des champs de texte
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Transfer Money</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Enter recipient's name"
          value={recipient}
          onChangeText={setRecipient}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={setAmount}
        />

        {/* Bouton de transfert personnalisé */}
        <TouchableOpacity style={styles.button} onPress={handleTransfer}>
          <Text style={styles.buttonText}>Transfer</Text>
        </TouchableOpacity>

        {confirmationMessage && <Text style={styles.confirmation}>{confirmationMessage}</Text>}

        {/* Bouton "Back to Home" qui redirige vers la page d'accueil sans effet de lien */}
        <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: 'tomato',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  confirmation: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
  },
  // Style commun pour les boutons (Transfer et Back to Home)
  button: {
    backgroundColor: 'tomato',  // Couleur de fond du bouton
    paddingVertical: 12,         // Espacement vertical (hauteur du bouton)
    paddingHorizontal: 20,       // Espacement horizontal (largeur du bouton)
    borderRadius: 5,            // Coins arrondis
    alignItems: 'center',       // Centrer le texte à l'intérieur du bouton
    marginTop: 20,              // Espacement au-dessus du bouton
  },
  buttonText: {
    color: 'white',             // Couleur du texte
    fontSize: 18,               // Taille de la police
    fontWeight: 'bold',         // Mettre le texte en gras
    textAlign: 'center',        // Centrer le texte à l'intérieur du bouton
  },
});
