## Was für HTTP Methoden gibt es? 

- GET (anfrage zum erhalt von Daten)
- POST (anfrage zum erstellen von Daten im Server)
- PUT (anfrage zum erstellen oder ersetzen von Daten im Server)
- DELETE (anfrage zum löschen von Daten)
- ... und noch mehr 

## Was bedeutet Idempotenz?

Idempotenz ist die Eigenschaft einer Methode, dass sie nach mehrmaliger Verwendung die gleichen Ergebnisse liefert wie bei der ersten Anwendung.

Ein Beispiel einer Idempotenten Methode wäre eine PUT-request, da man Unendlich oft die gleiche PUT request senden kann (Aktualisierung eines Kundendatensatzes) ohne das der Server einen Fehler wirft. 

Ein Beispiel für eine Nicht-Idempotenten Methode wäre eine POST request, da der server einen Fehler werfen wird, da der Datensatz spätestens nach der Ersten Request bereits existiert. 
