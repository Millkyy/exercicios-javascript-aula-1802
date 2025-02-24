// Manipulação de Datas com Date e moment.js no JavaScript
/*A manipulação de datas é uma necessidade comum em aplicações web e mobile. O JavaScript oferece o objeto nativo Date para lidar com datas e horários, mas ele pode ser complexo e limitado para algumas operações. Para facilitar esse processo, bibliotecas como Moment.js foram amplamente utilizadas, apesar de hoje serem substituídas por Day.js e a API nativa Intl.DateTimeFormat.*/

// 1. Manipulação de Datas com o Objeto Date
// O objeto Date no JavaScript permite a criação e manipulação de datas e horários. Ele opera no fuso horário UTC por padrão e pode ser ajustado para horários locais.

//Criando uma Data em JavaScript
// Podemos criar uma instância de Date de várias maneiras:
// Criando uma data com a data e hora atuais
const agora = new Date();
console.log(agora); // Exemplo: 2025-02-16T12:00:00.000Z
// Criando uma data específica (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo, Milissegundo)
const dataEspecifica = new Date(2025, 1, 16, 14, 30, 0);
console.log(dataEspecifica); // 16 de Fevereiro de 2025, 14:30
// Criando uma data a partir de uma string (Formato ISO)
const dataISO = new Date("2025-02-16T14:30:00Z");
console.log(dataISO); // 16 de Fevereiro de 2025, 14:30 UTC
// Criando uma data a partir de um timestamp (milissegundos desde 1º de janeiro de 1970)
const dataPorTimestamp = new Date(1708107000000);
console.log(dataPorTimestamp); // Data correspondente ao timestamp


// Obtendo Componentes de uma Data
// Podemos extrair partes de uma data usando métodos específicos:
const data = new Date(2025, 1, 16, 14, 30, 0);
console.log(data.getFullYear()); // 2025
console.log(data.getMonth()); // 1 (Fevereiro, pois os meses começam do 0)
console.log(data.getDate()); // 16
console.log(data.getDay()); // 0 (Domingo, pois os dias começam do 0 -  Domingo)
console.log(data.getHours()); // 14
console.log(data.getMinutes()); // 30
console.log(data.getSeconds()); // 0


// Modificando uma Data
// Podemos alterar valores da data:
const data = new Date();
data.setFullYear(2026);
data.setMonth(5); // Junho (meses começam do 0)
data.setDate(20);
console.log(data); // Nova data com os valores atualizados


// Formatando Datas
// A formatação de datas pode ser feita manualmente ou utilizando a API Intl.DateTimeFormat:
const data = new Date();
// Formatação padrão local
console.log(data.toLocaleDateString()); // Exemplo: "16/02/2025" (Brasil)
console.log(data.toLocaleDateString("en-US")); // "02/16/2025" (EUA)
console.log(data.toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
// "Domingo, 16 de fevereiro de 2025"


// Operações com Datas
// Para adicionar ou subtrair dias, meses ou anos, podemos manipular diretamente os valores:
const data = new Date();
data.setDate(data.getDate() + 7); // Adiciona 7 dias
console.log(data);
data.setMonth(data.getMonth() - 1); // Subtrai 1 mês
console.log(data);
// Embora possível, essas operações podem ser complicadas quando lidamos com fusos horários, horários de verão e meses com diferentes números de dias. Por isso, utilizamos bibliotecas como Moment.js.


// 2. Manipulação de Datas com Moment.js
/* O Moment.js foi uma das bibliotecas mais populares para manipulação de datas, mas atualmente está obsoleto, sendo substituído por bibliotecas mais leves como Day.js e Luxon. No entanto, ele ainda é encontrado em muitos projetos legados.*/

// Instalação do Moment.js
//Faremos a instalação do Moment quando estivernos desenvolvendo um projeto no React Native. Por hora, vamos usar o CDN embarcado no próprio arquivo html, pois estamos em aprendizado:
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>

// Criando Datas com Moment.js
// O Moment.js facilita a criação e manipulação de datas:
// Data atual
const agora = moment();
console.log(agora.format()); // Exemplo: 2025-02-16T14:30:00+00:00
// Criando uma data específica
const dataEspecifica = moment("2025-02-16", "YYYY-MM-DD");
console.log(dataEspecifica.format("DD/MM/YYYY")); // 16/02/2025


// Formatando Datas com Moment.js
// Formatar datas com Moment.js é muito mais flexível:
const data = moment();
console.log(data.format("DD/MM/YYYY")); // 16/02/2025
console.log(data.format("dddd, MMMM Do YYYY")); // Sunday, February 16th 2025
console.log(data.format("YYYY-MM-DD HH:mm:ss")); // 2025-02-16 14:30:00


// Adicionando e Subtraindo Datas
// Moment.js simplifica a adição e subtração de valores:
const data = moment();
// Adicionar 10 dias
console.log(data.add(10, "days").format("DD/MM/YYYY")); // 26/02/2025
// Subtrair 2 meses
console.log(data.subtract(2, "months").format("DD/MM/YYYY")); // 16/12/2024


// Comparação de Datas
// Comparar datas com Moment.js é simples:
const data1 = moment("2025-02-16");
const data2 = moment("2025-02-20");
console.log(data1.isBefore(data2)); // true
console.log(data1.isAfter(data2)); // false
console.log(data1.isSame(data2)); // false


// Convertendo para Timestamp
// Moment.js também permite converter para timestamps:
const data = moment("2025-02-16");
console.log(data.valueOf()); // Retorna timestamp em milissegundos
