/*
 * Copyright (c) 2017.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.fda.ctp.query.builder.support.builder;

import java.io.IOException;
import java.util.List;

import com.fda.ctp.query.builder.exception.ParserNotFoundException;
import com.fda.ctp.query.builder.support.filter.IRuleFilter;
import com.fda.ctp.query.builder.support.model.enums.EnumBuilderType;
import com.fda.ctp.query.builder.support.model.result.SqlQueryResult;
import com.fda.ctp.query.builder.support.model.sql.Operation;
import com.fda.ctp.query.builder.support.parser.IGroupParser;
import com.fda.ctp.query.builder.support.parser.IRuleParser;

/**
 * ---------------------------------------------------------------------------
 * sql 构造
 * ---------------------------------------------------------------------------
 * @author: hewei
 * @time:2017/10/30 15:44
 * ---------------------------------------------------------------------------
 */
public class SqlBuilder extends AbstractBuilder {

    /**
     * 构造函数
     * @param groupParser
     * @param ruleParsers
     * @param ruleFilters
     */
    public SqlBuilder(IGroupParser groupParser, List<IRuleParser> ruleParsers, List<IRuleFilter> ruleFilters) {
        super(groupParser, ruleParsers, ruleFilters);
    }

    /**
     * 构建
     * @param query
     * @return
     * @throws IOException
     * @throws ParserNotFoundException
     */
    @Override
    public SqlQueryResult build(String query) throws IOException, ParserNotFoundException {
        Operation result = (Operation) super.parse(query);

        // sql
        StringBuffer sql = new StringBuffer(result.getOperate());
        sql.delete(sql.length() - 2, sql.length());
        sql.delete(0, 2);

        return new SqlQueryResult(query, sql.toString(), (List<Object>) result.getValue());
    }

    /**
     * get builder type
     * @return
     */
    @Override
    protected EnumBuilderType getBuilderType() {
        return EnumBuilderType.SQL;
    }
}
