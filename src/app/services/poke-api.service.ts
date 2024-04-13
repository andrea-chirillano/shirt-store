import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {
    private baseUrl: string = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    getAllPokemon(): Observable<any> {
        return this.http.get(`${this.baseUrl}/pokemon?limit=1000`); // Cambia el límite según tus necesidades
    }

    getPokemonById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/pokemon/${id}`);
    }

    getPokemonCount(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/pokemon/`);
    }

    getCount(): Observable<number> {
        return this.http.get<any>(`${this.baseUrl}/pokemon/`).pipe(
            map(response => {
                // La clave 'count' contiene el número total de Pokémon
                return response.count;
            })
        );
    }

    getLastPokemonId(): Observable<number> {
        return new Observable<number>((observer) => {
            // Realiza una solicitud GET al endpoint de lista de Pokémon
            this.http.get<any>(`${this.baseUrl}/pokemon/`).subscribe(
                data => {
                    // El campo `count` representa la cantidad total de Pokémon
                    const lastPokemonId = data.count;
                    observer.next(lastPokemonId);
                    observer.complete();
                },
                error => {
                    observer.error(error);
                }
            );
        });
    }

    getAllPokemonIds(): number[] {
        // Define la URL de la API de Pokémon

        // Utiliza lastValueFrom para convertir el Observable a una Promesa y espera a que se resuelva
        const observable = this.http.get<any>(this.baseUrl).pipe(
            map(response => {
                // Extrae los resultados del cuerpo de la respuesta
                const results = response.results;

                // Extrae los IDs de las URLs de cada resultado
                const pokemonIds = results.map((pokemon: { url: any; }) => {
                    const url = pokemon.url;
                    const parts = url.split('/');
                    const id = parseInt(parts[parts.length - 2], 10);
                    return id;
                });

                // Ordena los IDs de menor a mayor
                pokemonIds.sort((a: number, b: number) => a - b);

                // Devuelve el array ordenado de IDs
                return pokemonIds;
            })
        );

        // Convierte el Observable a una Promesa usando lastValueFrom
        const idsPromise = lastValueFrom(observable);

        // Espera a que se resuelva la Promesa y devuelve el array de números
        let pokemonIds: number[] = [];
        idsPromise.then(ids => {
            pokemonIds = ids;
        });

        // Retorna el array de IDs
        return pokemonIds;
    }

}
