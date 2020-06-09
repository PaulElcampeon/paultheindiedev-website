package com.paultheindiedev.paultheindiedevwebsite.services.interfaces;

import com.paultheindiedev.paultheindiedevwebsite.models.CreateGameRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.UpdateGameRequest;

public interface GameService {

    boolean createGame(CreateGameRequest createGameRequest);

    boolean updateGame(UpdateGameRequest updateGameRequest);
}
