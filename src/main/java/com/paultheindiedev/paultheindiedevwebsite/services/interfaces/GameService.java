package com.paultheindiedev.paultheindiedevwebsite.services.interfaces;

import com.paultheindiedev.paultheindiedevwebsite.models.CreateGameRequest;

public interface GameService {

    boolean createGame(CreateGameRequest createGameRequest);
}
