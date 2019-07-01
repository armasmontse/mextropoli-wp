<?php

namespace App\Taxonomies;

use Illuminate\Taxonomy;

class EditionSpeakerTypology extends Taxonomy
{
    const nombre_plural = 'Tipos de expositores';
    const nombre_singular = 'tipo de expositor';
    const slug = 'edition_speaker-typology';

    protected static $postypes = ['edition_speaker'];

    protected static $initialTerms = [
        'conferencias'      => 'Conferencias',
        'mesa-de-dialogo'   => 'Mesa de diálogo',
        'ruta'              => 'Ruta',
        'taller'            => 'Taller',
        'cine'              => 'Cine',
        'ponencia'          => 'Ponencia',
        'evento'            =>  'Evento',
    ];
}