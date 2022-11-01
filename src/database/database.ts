/**
 * Internal class for database access.
 *
 * DB is a constructor for multi-database one-class management system for my CoffeeCRM system; It uses three database engines as a base for a range of support.
 *
 * @file This file describes the DB class
 * @author mkko120
 * @since 0.0.1
 */


import DB_TYPE  from "./enums/DB_TYPE";
import {
    EngineNotSupportedError,
    NoDatabaseSelectedError,
    NotImplementedYetError
} from "./errors/DatabaseErrors";


import type DatabaseOptions from "./interfaces/DatabaseOptions";
import type {QueryArgs} from "./interfaces/QuerryType";


/**
 * @class DB
 *
 * Main class responsible for the database connection handling.
 *
 * @since 0.0.1
 * @author mkko120
 */

class DB {



    /**
     * Is responsible for keeping the database connection object.
     * @since 0.0.1
     * @author mkko120
     * @private
     */
    private db;

    /**
     * Holds information about specific engine that connection uses.
     * @author mkko120
     * @private
     */
    private engine;

    /**
     * Is responsible for defining which engine user uses and using proper connection handler.
     * @param type
     * @param options
     */
    constructor(type: DB_TYPE, options: DatabaseOptions) {

        switch(type) {
            case DB_TYPE.Redis:
                throw new EngineNotSupportedError("Currently selected engine is not yet implemented by our team. Please select other database engine.")
            case DB_TYPE.MySQL:
                this.engine = this.MySQL;
                break;

            case DB_TYPE.SQLite:
                this.engine = this.SQLite;
                break;

            default:
                throw new NoDatabaseSelectedError("You need to select database to use this connector");
        }
    }

    private Redis = {

    }

    private MySQL = {
        connect(): Promise<any> {

            return null;
        },
        select(): Promise<any> {

            return null;
        },
        query(...args: QueryArgs): Promise<any> {

           if (args.length > 2) {

           } else {

           }

            return null;
        }
    }

    private SQLite = {

    }

    private get(): Promise<any> {
        throw new NotImplementedYetError("This method is not yet implemented.")
    }

    private set(): Promise<any> {
        throw new NotImplementedYetError("This method is not yet implemented.")
    }


}


export default DB;