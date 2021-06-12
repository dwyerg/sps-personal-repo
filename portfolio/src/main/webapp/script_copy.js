// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

async function showFav() {
    const responseFromServer = await fetch('/fav');
    const stats = await responseFromServer.json();

    const favListElement = document.getElementById('fav-container');
    favListElement.innerHTML = '';

  favListElement.appendChild(
      createListElement(stats.favColor));
  favListElement.appendChild(
      createListElement(stats.favPet));
  favListElement.appendChild(
      createListElement(stats.favSoftDrink));
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
