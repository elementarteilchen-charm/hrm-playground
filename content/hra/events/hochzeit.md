# Hochzeit

* MA\*in gibt Heirat bekannt (Email oder Telefonisch, Self Service)

* **Namensänderung** wird vorgenommen
	* Der neue Name wird im Feld "Name" eingetragen 
	* Der alte Name wird im Feld "Geburtsname" gespeichert.

* **Status wird auf "Verheiratet"** gesetzt
	* Feld "Familienstand" MA.FSTAND (bzw Tabelle ME.FSTAND)
	* Werte aus Lookup Tabelle

* Das **Datum der Heirat** wird erfasst
	 Feld "seit" MA.FSTAND_VOM (Feld heißt tatsächlich "VOM")

* Als **Familienangehöriger** wird der/die Partner\*in in Persis erfasst
	* Eintrag in Tabelle "Familienangehörige" MA_KOPERS mit Verwandtschaftsgrad aus der Lookuptabelle "Gattin" oder "Gatte"
	* Über die Checkbox "Nachweis" (MA_KOPERS.KO_NACHWEIS J/N) wird festgehalten, dass die Heiratsurkunde an HR übermittelt wurde.

* **Heiratsurkunde** muss zeitnah an HR übermittelt werden (ist jedoch kein Blocker), damit der Sonderurlaub gewährt werden kann.

* Der Sonderurlaub wird in An/Ab verwaltet.

* Die Kopie vom neuen Reisepass ist für HR wünschenswert für den korrekten Namen
	* Notwendig ist der Reisepass für die Meldung an die SVA und die Gehaltsabrechnung

* **Benachrichtigung** per Email "Es hat eine Namensänderung stattgefunden" an Verteiler versendet (IT, Rechnungswesen)
	* WND: Email Verteiler Pers-Stammdatenblatt (Verrechnung)
	* Korrespondenz: Stammdatenblatt aus Persis mit alter Name und neuer Name
	* KUF: Excel Info Liste  an IT, PersSchulung, Telefon

* Das **Hochzeitsgeschenk** wurde überreicht
	* Die erfassten Daten zum Hochzeitsgeschenk sind (Tabelle LKW_MA_GESCHENK):
		* Kategorie, Bezeichnung, Betrag, Ereignisdatum, Ausgabedatum, ausgegeben von, Betriebszugehörigkeit
	* Betrag aus Sharepoint je nach Betriebszugehörigkeit
	* Dauer der Zugehörigkeit ist wichtig für Auswertungen und Bestellungen
	* Geschenk nur für 1. Hochzeit

## Geschenke
Siehe [Geschenke](http://lkwconfluence.lkw-walter.com/display/PVNEU/Geschenke)
* In **Outlook** wird eine **Aufgabe mit Erinnerung** erstellt, in der die Bestellungen der Gutscheine für die frisch Verheirateten erfasst werden