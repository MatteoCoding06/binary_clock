# 🕒 Binary Clock

Un orologio binario realizzato con **HTML**, **CSS** e **JavaScript** — perfetto per chi ama la programmazione e vuole leggere l'ora in modo geek!


---

## 🚀 Demo

🔗 **Live:** [https://matteocoding06.github.io/binary_clock/]([https://TUO_USERNAME.github.io/binary-clock](https://matteocoding06.github.io/binary_clock/))

---

## 📦 Caratteristiche

- ⌛ Mostra ore, minuti e secondi in **formato binario**
- 💡 Celle luminose indicano i bit attivi
- 🧠 Perfetto per capire come funziona il sistema binario
- 📱 Responsive: si adatta a qualsiasi schermo

---

## 🧾 Come si legge un orologio binario

Ogni cifra dell’orario (es: `12:34:56`) viene separata in singole cifre e **convertita in binario a 4 bit**.

### Esempio: orario 13:47:59

Cifre separate: `1 3 : 4 7 : 5 9`

Ogni cifra viene convertita in binario:

| Decimale | Binario |
|----------|---------|
| 1        | 0001    |
| 3        | 0011    |
| 4        | 0100    |
| 7        | 0111    |
| 5        | 0101    |
| 9        | 1001    |

Le colonne dell’orologio visualizzano ogni cifra in verticale, con le **celle accese = bit 1** e **celle spente = bit 0**.

Ogni colonna è composta da 4 celle:

○ <-- bit 8

○ <-- bit 4

● <-- bit 2

● <-- bit 1


Per leggere il valore:
- Somma i valori dei bit accesi
- Nell’esempio sopra: `2 + 1 = 3`

  

