public async Task<IEnumerable<TDocument>> Find(string field, string value, int pageIndex, int pageSize, string sortName, Contracts.SortDirection sortOrder)
        {
            FilterDefinition<TDocument> filter;
            if (!field.Equals("*") && !value.Equals("*"))
            {
                BsonRegularExpression regx = new BsonRegularExpression($"/{value}/");
                var builder = Builders<TDocument>.Filter;
                filter = builder.Regex(field, regx);
            }
            else
            {
                filter = Builders<TDocument>.Filter.Empty;
            }
            FieldDefinition<TDocument> fd = sortName;
            SortDefinitionBuilder<TDocument> sdb = Builders<TDocument>.Sort;
            SortDefinition<TDocument> sd;
            if (sortOrder == Contracts.SortDirection.Ascending)
                sd = sdb.Ascending(fd);
            else
                sd = sdb.Descending(fd);

            return await _collection.Find(filter)
                .Skip(pageIndex * pageSize)
                .Limit(pageSize)
                .Sort(sd)
                .ToListAsync();
        }

        public async Task<long> Count(string field, string value)
        {
            FilterDefinition<TDocument> filter;
            if (!field.Equals("*") && !value.Equals("*"))
            {
                BsonRegularExpression regx = new BsonRegularExpression($"/{value}/");
                var builder = Builders<TDocument>.Filter;
                filter = builder.Regex(field, regx);
            }
            else
            {
                filter = Builders<TDocument>.Filter.Empty;
            }

            return await _collection.CountDocumentsAsync(filter);
        }
