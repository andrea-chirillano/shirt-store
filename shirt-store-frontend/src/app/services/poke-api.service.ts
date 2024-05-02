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
        return this.http.get(`${this.baseUrl}/pokemon?limit=1000`);
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
                return response.count;
            })
        );
    }

    getLastPokemonId(): Observable<number> {
        return new Observable<number>((observer) => {
            this.http.get<any>(`${this.baseUrl}/pokemon/`).subscribe(
                data => {
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
        const observable = this.http.get<any>(this.baseUrl).pipe(
            map(response => {
                const results = response.results;
                const pokemonIds = results.map((pokemon: { url: any; }) => {
                    const url = pokemon.url;
                    const parts = url.split('/');
                    const id = parseInt(parts[parts.length - 2], 10);
                    return id;
                });
                pokemonIds.sort((a: number, b: number) => a - b);
                return pokemonIds;
            })
        );

        const idsPromise = lastValueFrom(observable);

        let pokemonIds: number[] = [];
        idsPromise.then(ids => {
            pokemonIds = ids;
        });

        return pokemonIds;
    }

}
