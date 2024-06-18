# Elternkarenz

* Der Prozess beginnt mit der Meldung der Schwangerschaft  
* Damit wird der voraussichtliche Geburtstermin bekannt gegeben und in Persis erfasst.
	* Beginn der Wochenhilfe wird aktuell manuell berechnet (Wunsch nach Automatisierung)
* Je nach Standort erfolgt die Meldung der Kurssperre (MA\*in wird von allen geplanten Schulungen abgemeldet)
	* Die Meldung erfolgt derzeit manuell (Möglichkeit / Notwendigkeit das zu automatisieren?)
	* Es gibt in Persis ein Feld für "Kurssperre" unter Mitarbeiter > Diverses.
	* DB Tabelle: ME_FREI.FREIB4
* 8 Wochen vor dem geplanten Geburtstermin beginnt die Wochenhilfe
	* MA-in wird in MATATOR manuell auf "inaktiv" eingestellt  
	* Vorzeitige Wochenhilfe ist möglich wenn medizinisch notwendig
	* Info an Personalverrechnung 
* 8 Wochen nach der Geburt endet die Wochenhilfe (kein Kaiserschnitt)
	* Bei Mehrlingsgeburt endet die Wochenhilfe 12 Wochen nach der Geburt

* **Mit dem Ende der Wochenhilfe ist das Arbeitsende erreicht. Das Dienstverhältnis wird auf inaktiv gestellt.**

* Austrittsmeldung an Verteiler -> Info für das Einsammeln der Leihgaben wird versendet
	* Frage: Wie sieht die Info aus? Wer bekommt sie? Ist das Fire-and-Forget oder wird nachgefasst?
	* Zuweisung der MA\*in zu einer eigenen Kostenstelle
* **Die Karenz beginnt mit dem Ende der Wochenhilfe**
	* Dauer der Karenz wird in Persis erfasst (Enddatum)
	* Zuweisung in MATATOR zur "Karenz" Org-Einheit
	* MA muss (soll) Geburtsurkunde übermitteln. Die Geburtsurkunde wird in der Digitalen Akte abgelegt
	* Familienangehörige werden erfasst
* Im Fall einer geringfügigen Beschäftigung
	* 6-er Personalnummer bei Karenz (parallel existiert ein inaktives DV)
	* Zusatz zum DV für geringfügige Besch.
	* Info an Personalverrechnung
* **Die Karenz endet**
	* Die MA\*in (Mutter) kehrt zurück - meistens in Elternteilzeit
	* Elternteilzeit hat ein individuelles Arbeitszeitmodell, das in AnAb eingetragen wird
		* Verbesserung: Hat keine dedizierte ‘Markierung’ (Wunsch danach wäre eventuell da), i.e. ist einfach nur ein Teilzeitvertrag. HR weiß (nur?) anhand des Zeit-Modells, ob es sich um eine Elternteilzeit handelt.
	* HR setzt sich eine Erinnerung für das Ende der Elternteilzeit
* **Geht der Vater in Elternteilzeit muss er**
		* eine Geburtsurkunde übermitteln
		* eine Vereinbarung zur Elternteilzeit unterschreiben
		* Beides wird in der Digitalen Akte abgelegt
		* Frage: Wo wird die Vereinbarung vermerkt? Wo wird die Vorlage für die Vereinbarung verwaltet?

* Wochenhilfe muss im System frühzeitig abgebrochen werden können (beispielsweise im Falle einer Totgeburt, etc.). 
* Die Felder in Persis werden nicht geleert.
* Verbesserung: 
	* Persis überschreibt mit jeder neuen Schwangerschaft die entsprechenden Schwangerschafts-Felder. 
	* Dadurch geht die Historie verloren. Besser ist es ein 1:N Relation zu ermöglichen.