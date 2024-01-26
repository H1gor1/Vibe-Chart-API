# Vibe Music Chart API

This API provides an interface to access Vibe Music Chart data, allowing you to retrieve real-time information.

## How to Use

### Installation

1. Clone the repository to your local environment:

   ```
   git clone https://github.com/H1gor1/Vibe-Chart-API.git
   ```

2. Navigate to the project directory:

   ```
   cd Vibe-Chart-API
   ```

3. Install dependencies:

   ```
   npm install
   ```
### Local Execution

   ```
    npm start
   ```
The API will be accessible at http://localhost:3030.

### API Routes:
  #### Get Real-Time Chart:
    GET /api/musicsVibe
  
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `rank`      | `String` | Current song rank |
| `title`      | `String` | Song name |
| `artist`      | `String` | Artist name |
| `album`      | `String` | Album name |
| `imageUrl`      | `String` | Album/song image URL |

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
