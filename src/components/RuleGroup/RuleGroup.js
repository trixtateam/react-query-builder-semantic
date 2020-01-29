import React from 'react';
import Rule from '../Rule';
import PropTypes from 'prop-types';

/**
 * Default element to group rules for the QueryBuilder
 */
class RuleGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            combinator, rules, translations, onRuleRemove, createRule, onRuleAdd, createRuleGroup, onGroupAdd, onGroupRemove,
            isRuleGroup, getLevel, getOperators, onPropChange, classNames, schema: { combinators, controls }
        } = this.props;
        return (
            <div className={`${classNames.ruleGroupContainer}`}>
                <div className={`${classNames.ruleGroup}`}>
                    <div className={`${classNames.ruleGroupHeader}`}>
                        <div className={`${classNames.ruleGroupCombinators}`}>
                            {
                                React.createElement(controls.combinatorSelector,
                                    {
                                        options: combinators,
                                        value: combinator,
                                        title: translations.combinators.title,
                                        className: `${classNames.combinators}`,
                                        handleOnChange: this.onCombinatorChange,
                                    }
                                )
                            }
                        </div>
                        <div className={`${classNames.ruleGroupActions}`}>
                            {
                                React.createElement(controls.addRuleAction,
                                    {
                                        label: translations.addRule.label,
                                        title: translations.addRule.title,
                                        className: `${classNames.addRule}`,
                                        handleOnClick: this.addRule,
                                    }
                                )
                            }
                            {
                                React.createElement(controls.addGroupAction,
                                    {
                                        label: translations.addGroup.label,
                                        title: translations.addGroup.title,
                                        className: `${classNames.addGroup}`,
                                        handleOnClick: this.addGroup,
                                    }
                                )
                            }
                            {
                                this.hasParentGroup() ?
                                    React.createElement(controls.removeGroupAction,
                                        {
                                            label: translations.removeGroup.label,
                                            title: translations.removeGroup.title,
                                            className: `${classNames.removeGroup}`,
                                            handleOnClick: this.removeGroup,
                                        }
                                    ) : null
                            }
                        </div>
                    </div>
                    <div className="group-or-rule__group-children">
                        {
                            rules.map(rule => {
                                return (
                                    isRuleGroup(rule)
                                        ? <RuleGroup key={rule.id}
                                                     id={rule.id}
                                                     classNames={classNames}
                                                     schema={this.props.schema}
                                                     parentId={this.props.id}
                                                     onGroupAdd={onGroupAdd}
                                                     getLevel={getLevel}
                                                     isRuleGroup={isRuleGroup}
                                                     createRuleGroup={createRuleGroup}
                                                     onGroupRemove={onGroupRemove}
                                                     onPropChange={onPropChange}
                                                     onRuleAdd={onRuleAdd}
                                                     onRuleRemove={onRuleRemove}
                                                     createRule={createRule}
                                                     getOperators={getOperators}
                                                     combinator={rule.combinator}
                                                     translations={this.props.translations}
                                                     rules={rule.rules} />
                                        : <Rule
                                            key={rule.id}
                                            id={rule.id}
                                            classNames={classNames}
                                            field={rule.field}
                                            value={rule.value}
                                            getOperators={getOperators}
                                            onPropChange={onPropChange}
                                            getLevel={getLevel}
                                            operator={rule.operator}
                                            schema={this.props.schema}
                                            parentId={this.props.id}
                                            translations={this.props.translations}
                                            onRuleRemove={onRuleRemove}
                                        />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    hasParentGroup() {
        return this.props.parentId;
    }

    onCombinatorChange = (value) => {
        const { onPropChange } = this.props;

        onPropChange('combinator', value, this.props.id);
    };

    addRule = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { createRule, onRuleAdd } = this.props;

        const newRule = createRule();
        onRuleAdd(newRule, this.props.id)
    };

    addGroup = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { createRuleGroup, onGroupAdd } = this.props;
        const newGroup = createRuleGroup();
        onGroupAdd(newGroup, this.props.id)
    };

    removeGroup = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.onGroupRemove(this.props.id, this.props.parentId);
    };


}

RuleGroup.propTypes = {
    /**
     * This is a callback function invoked to get the list of allowed operators for the given field
     */
    getOperators: PropTypes.func,
    /**
     * This is a callback function invoked to return the current level for this rule
     */
    getLevel: PropTypes.func,
    /**
     * This is a callback function invoked when a rule is removed
     */
    onRuleRemove: PropTypes.func,
    /**
     * This is a callback function invoked notify this ruleGroup has made a property change for combinator
     */
    onPropChange: PropTypes.func,
    /**
     * This is a callback function invoked when this RuleGroup is removed
     */
    onGroupRemove: PropTypes.func,
    /**
     * This is a callback function to return a new default RuleGroup
     */
    createRuleGroup: PropTypes.func,
    /**
     * This is a callback function invoked when clicking on creating a new RuleGroup
     */
    onGroupAdd: PropTypes.func,
    /**
     * This is a callback function to return a new default Rule
     */
    createRule: PropTypes.func,
    /**
     * This is a callback function invoked when clicking on creating a new Rule
     */
    onRuleAdd: PropTypes.func,
    /**
     * This is a callback function invoked to determine if the element is a RuleGroup
     */
    isRuleGroup: PropTypes.func,
    /**
     * Random generated id for rule
     */
    id: PropTypes.any.isRequired,
    /**
     *  Id for the RuleGroup this RuleGroup is nested in
     */
    parentId: PropTypes.any,
    /**
     * Array of current Rules
     */
    rules: PropTypes.array,
    /**
     * Selected combinator value
     */
    combinator: PropTypes.string.isRequired,
    /**
     * Current schema from QueryBuilder
     */
    schema: PropTypes.object,
    /**
     * This can be used to override translatable texts created by the <QueryBuilderSemantic />
     * https://react.semantic-ui.com/elements/icon/
     */
    translations: PropTypes.shape({
        fields: PropTypes.shape({
            title: PropTypes.string
        }),
        operators: PropTypes.shape({
            title: PropTypes.string
        }),
        value: PropTypes.shape({
            title: PropTypes.string
        }),
        removeRule: PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string
        }),
        removeGroup: PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string
        }),
        addRule: PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string
        }),
        addGroup: PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string
        }),
        combinators: PropTypes.shape({
            title: PropTypes.string
        })
    }),
    /**
     * This can be used to assign specific CSS classes to various controls that are created by the QueryBuilderSemantic
     */
    classNames: PropTypes.shape({
        /**
         *Root <div> element
         */
        queryBuilder: PropTypes.string,
        /**
         *<div> containing the RuleGroup
         */
        ruleGroup: PropTypes.string,
        /**
         *<Dropdown> control for combinators
         */
        combinators: PropTypes.string,
        /**
         *<Button> to add a Rule
         */
        addRule: PropTypes.string,
        /**
         *<Button> to add a RuleGroup
         */
        addGroup: PropTypes.string,
        /**
         *<Button> to remove a RuleGroup
         */
        removeGroup: PropTypes.string,
        /**
         *<div> containing the Rule
         */
        rule: PropTypes.string,
        /**
         *<Dropdown> control for fields
         */
        fields: PropTypes.string,
        /**
         *<Dropdown> control for operators
         */
        operators: PropTypes.string,
        /**
         *<Input> for the field value
         */
        value: PropTypes.string,
        /**
         *<Button> to remove a Rule
         */
        removeRule: PropTypes.string,
    }),
};

RuleGroup.defaultProps = {
    id: null,
    parentId: null,
    rules: [],
    combinator: 'and',
    schema: {},
};


export default RuleGroup;
