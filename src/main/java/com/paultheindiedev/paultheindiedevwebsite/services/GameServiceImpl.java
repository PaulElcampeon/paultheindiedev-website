package com.paultheindiedev.paultheindiedevwebsite.services;

import com.paultheindiedev.paultheindiedevwebsite.models.CreateGameRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.Game;
import com.paultheindiedev.paultheindiedevwebsite.models.GamesFolder;
import com.paultheindiedev.paultheindiedevwebsite.repositories.GameRepository;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameServiceImpl implements GameService {

    @Autowired
    private GameRepository repository;

    @Override
    public boolean createGame(CreateGameRequest createGameRequest) {
        GamesFolder games =  repository.findById(createGameRequest.getGameId()).get();

        games.getGames().add(new Game(createGameRequest));

        repository.save(games);

        return false;
    }
}
