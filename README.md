### Stwórz Bank w Redux

#### Skonfigurują Reduxa w projekcie
- stwórz store, reducery oraz Providera

##### Stwórz komponent Bank

- komponent bank powinien zawierać formularz służący do otwierania konta użytkownika z polami:
-- imię
-- nazwisko
-- pesel
-- stan konta
-- stan lokaty
-- stan kredytu

- stwórz reducer służący do obsługi listy kont

##### Na podstawie reducera z listą kont stwórz komponenty Customer
- stwórz komponent customer z odpowiednimi danymi
- komponent klienta musi zawierać
-- formularz wpłaty
-- formularz wypłaty
-- formularz dodawania lokaty
-- formularz kredytowy
-- formularz wpłaty wewnętrznej - spłaty kredytu lub dodania lokaty

##### Stwórz komponent z listą klientów - CustomersList

##### Pokaż stan konta banku
- stan konta
- stan lokat
- stan kredytów
- stan zaległych spłat

##### Ustaw interwał który odpowiednio co 1 minutę zwiększy stan lokat o 0.5% a kredytów zmniejszy o 1%

###### Do stworzenia formularz może posłużyć Ci zainstalowana biblioteka bootstrap
